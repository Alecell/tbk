import 'components/Form/Form.css';
import { inputList } from 'components/Form/InputsGeneratorConfig';
import RenderInputs from 'components/Form/Inputs/RenderInputs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputAttributes } from './Types';

export default function Form() {
  const { handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div className="Form" onSubmit={handleSubmit(onSubmit)}>
      <RenderInputs inputsList={inputList} />
      <input type="submit" />
    </div>
  );
}