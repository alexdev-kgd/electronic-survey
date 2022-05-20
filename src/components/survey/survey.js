import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import './survey.sass'
import data from '../../assets/survey.json';
import { useState } from "react";
import { useHistory } from 'react-router';
import { clearLocalStorage, getLocalStorageData } from "../../shared/localStorage";
import { ROUTE_NAMES } from "../../shared/const/routeNames";

const Survey = () => {
    const history = useHistory()

    const surveyElemLength = data.length;
    const placeholder = "Enter text..."
    const textFieldVariant = "outlined"
    const nameFormat = (index) => 'question-' + index;
    
    const [inputSet, setInputValue] = useState([]);
    const [errors, setErrors] = useState({})

    const onInputChange = (e) => {
        const { type, name, value } = e.target;

        const newObjectStructure = {
            name: name,
            type: type,
            value: value,
        };

        const filteredInput = inputSet.filter(input => input.name === name);

        if (filteredInput.length > 0) {
            const restState = inputSet.filter(input => input.name !== name);
            setInputValue([
                ...restState, 
                newObjectStructure
            ]);
        } else {
            setInputValue([
                ...inputSet,
                newObjectStructure
            ]);
        }
        validate(newObjectStructure);
    }

    const inputReturnValue = (index) => {
        const filtered = inputSet.filter(item => item.name === 'question-'+index)[0]?.value;
        return filtered || "";
    }

    const validateObjectValues = (item, conditional) => Object.values(item).every(conditional.bind(this));

    const isFormValid = _ => {
        if (inputSet.length !== surveyElemLength) return false;
        let isValid;
        inputSet.forEach(input => {
            if(input.value.length === 0) return false;
            isValid = validateObjectValues(errors, (x) => x === "");
        });
        return isValid;
    }

    const isTextInputValid = text => text.match('^[a-zA-Z]*$') ? true : false

    const isNumericInputValid = number => (number.match('^[0-9]*$') && number > 0 && number < 120) ? true : false

    const validate = input => {
        let temp = { ...errors }

        switch (input?.type) {
            case "textarea":
            case "text":
                (input.value.length && isTextInputValid(input.value))
                ? temp[input.name] = ""
                : temp[input.name] = input.value
                break;
            case "number":
                (input.value.length && isNumericInputValid(input.value))
                ? temp[input.name] = ""
                : temp[input.name] = input.value
                break;
            case "radio":
                input.value.length ? temp[input.name] = "" : temp[input.name] = input.value
                break;
            default:
                break;
        }

        setErrors({ ...temp })
    }

    const submitForm = event => {
        event.preventDefault()
        if (isFormValid) {
            const lcData = getLocalStorageData();
            console.log(lcData);
            console.log(inputSet);
            clearLocalStorage();
            localStorage.setItem('finished', 'true');
            history.push(ROUTE_NAMES.FINISH_PAGE)
        }
    }

    const getCheckboxAnswers = (answers, groupId) => {
        return answers.map((answer, index) => {
            return (
                <FormControlLabel key={index}
                                  value={answer.text}
                                  checked={inputReturnValue(groupId) === answer.text}
                                  control={<Radio color="primary" />}
                                  label={answer.text}
                                  />
            )
        })
    }

    const getElementByType = (data, index) => {
        switch (data.type) {
            case 'text':
                return (
                    <TextField name={nameFormat(index)}
                               {...(errors[nameFormat(index)] && { error: true })}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                               value={inputReturnValue(index)}
                               onChange={onInputChange}
                               required
                    />
                )
            case 'textarea':
                return ( 
                    <TextField name={nameFormat(index)}
                               {...(errors[nameFormat(index)] && { error: true })}
                               multiline
                               rows={5}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                               value={inputReturnValue(index)}
                               onChange={onInputChange}
                               required
                    />
                )
            case 'numeric':
                return (
                    <TextField name={nameFormat(index)}
                               {...(errors[nameFormat(index)] && { error: true })}
                                type="number"
                                inputProps={{ min: "0", max: "100", step: "1" }}
                                variant={textFieldVariant}
                                placeholder={placeholder}
                                value={inputReturnValue(index)}
                                onChange={onInputChange}
                                required
                    />
                )
            case 'checkbox':
                return (
                    <RadioGroup row 
                                name={nameFormat(index)}
                                {...(errors[nameFormat(index)] && { error: true })}
                                onChange={onInputChange}
                                value={""}
                                required>
                        { getCheckboxAnswers(data.answers, index) }
                    </RadioGroup>
                )
            default:
                break;
        }
    }

    const readJSONfile = data.map((data, index) => {
        return (
            <div className="survey__block" key={index}>
                <p className="survey__question">{data.question}</p>
                <FormControl className="survey__answers" component="fieldset">
                    { getElementByType(data, index) }
                </FormControl>
            </div>
        )
    })

    return (
        <div className="survey">
            <div className="survey__info-block">
                <p>
                    For every question, you should choose to select only one answer. All of the questions need to be
                    answered. As you finished answering questions, submit your answers by clicking the button "Submit"
                </p>
            </div>
            <div className="survey__container">
                <form onSubmit={submitForm}>
                    { readJSONfile }
                    <div className="survey__submit-block">
                        <Button className="form__submit-btn"
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!isFormValid()}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Survey
