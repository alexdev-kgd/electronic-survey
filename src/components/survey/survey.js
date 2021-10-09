import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import './survey.sass'
import data from '../../assets/survey.json';

const Survey = () => {
    const placeholder = "Enter text..."
    const textFieldVariant = "outlined"

    const getCheckboxAnswers = (answers) => {
        return answers.map((answer, index) => {
            return (
                <FormControlLabel key={index} value={index} control={<Radio color="primary" />} label={answer.text} />
            )
        })
    }

    const getElementByType = (data) => {
        switch (data.type) {
            case 'text':
                return (
                    <TextField name={"question-" + data.id}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                    />
                )
            case 'textarea':
                return (
                    <TextField name={"question-" + data.id}
                               multiline
                               rows={5}
                               variant={textFieldVariant}
                               placeholder={placeholder}
                    />
                )
            case 'numeric':
                return (
                    <TextField name={"question-" + data.id}
                                type="number"
                                inputProps={{ min: "0", max: "100", step: "1" }}
                                variant={textFieldVariant}
                                placeholder={placeholder}
                    />
                )
            case 'checkbox':
                return (
                    <RadioGroup row name={"question-" + data.id}>
                        { getCheckboxAnswers(data.answers) }
                    </RadioGroup>
                )
            default:
                break;
        }
    }

    const readJSONfile = data.map((data) => {
        return (
            <div className="survey__block" key={data.id}>
                <p className="survey__question">{data.question}</p>
                <FormControl className="survey__answers" component="fieldset">
                    { getElementByType(data) }
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
                    <Button className="form__submit-btn"
                            type="submit"
                            variant="contained"
                            color="primary">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Survey
