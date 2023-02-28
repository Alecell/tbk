import 'components/Form/Form.css';
import { inputList } from 'components/Form/InputsGeneratorConfig';
import RenderInputs from 'components/Form/Inputs/RenderInputs';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <RenderInputs
        inputsList={inputList}
        register={register}
        errors={errors}
        controllerHooksForm={control}
      />
      <input type="submit" />
    </form>
  );
}
