import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import './survey.sass'
import data from '../../assets/survey.json';
import { useState } from "react";

const Survey = () => {
    const placeholder = "Enter text..."
    const textFieldVariant = "outlined"
    
    const [inputSet, setInputValue] = useState([]);

    const onInputChange = (e) => {
        const { type, name, value } = e.target;
        // const isChecked = type === 'radio' ? e.target.checked : undefined;
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
    }

    const inputReturnValue = (index) => {
        const filtered = inputSet.filter(item => item.name === 'question-'+index)[0]?.value;
        console.log(filtered);
        return filtered || "";
    }

    const submitForm = event => {
        event.preventDefault()
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
                    <TextField name={"question-" + index}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                               value={inputReturnValue(index)}
                               onChange={onInputChange}
                    />
                )
            case 'textarea':
                return ( 
                    <TextField name={"question-" + index}
                               multiline
                               rows={5}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                               value={inputReturnValue(index)}
                               onChange={onInputChange}
                    />
                )
            case 'numeric':
                return (
                    <TextField name={"question-" + index}
                                type="number"
                                inputProps={{ min: "0", max: "100", step: "1" }}
                                variant={textFieldVariant}
                                placeholder={placeholder}
                                value={inputReturnValue(index)}
                                onChange={onInputChange}
                    />
                )
            case 'checkbox':
                return (
                    <RadioGroup row 
                                name={"question-" + index}
                                onChange={onInputChange}
                                value={""}>
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
                    answered. As you finished answering questions, submit your answers by clicking on button "Submit"
                </p>
            </div>
            <div className="survey__container">
                { readJSONfile }
                <div className="survey__submit-block">
                    <Button onClick={submitForm}
                            className="form__submit-btn"
                            type="submit"
                            variant="contained"
                            color="primary">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Survey
