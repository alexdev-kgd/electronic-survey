import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import './survey.sass'

const Survey = () => {
    return (
        <div className="survey">
            <div className="survey__info-block">
                <p>
                    For every question, you should choose to select only one answer. All of the questions need to be
                    answered. As you finished answering questions, submit your answers by clicking on button "Submit"
                </p>
            </div>
            <div className="survey__container">
                <div className="survey__block">
                    <p className="survey__question">Lorem ipsum dolor sit amet?</p>
                    <FormControl className="survey__answers" component="fieldset">
                        <TextField name="question-1"
                                   multiline
                                   rows={5}
                                   variant="outlined"
                                   placeholder="Enter Text..."
                        />
                    </FormControl>
                </div>
                <div className="survey__block">
                    <p className="survey__question">Lorem ipsum dolor sit amet?</p>
                    <FormControl className="survey__answers" component="fieldset">
                        <TextField name="question-1"
                                   variant="outlined"
                                   placeholder="Enter Text..."
                        />
                    </FormControl>
                </div>
                <div className="survey__block">
                    <p className="survey__question">Lorem ipsum dolor sit amet?</p>
                    <FormControl className="survey__answers" component="fieldset">
                        <TextField name="question-1"
                                   type="number"
                                   inputProps={{ min: "0", max: "100", step: "1" }}
                                   variant="outlined"
                                   placeholder="Enter Number..."
                        />
                    </FormControl>
                </div>
                <div className="survey__block">
                    <p className="survey__question">Lorem ipsum dolor sit amet?</p>
                    <FormControl className="survey__answers" component="fieldset">
                        <RadioGroup row  name="question-1">
                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
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
