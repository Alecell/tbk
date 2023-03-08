import RenderInputs from 'components/Form/Inputs/RenderInputs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputsToRender } from '../../../config/InputsToRender';
import { styles } from './Form.styles';

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    getValues,
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form className="Form" css={styles} onSubmit={handleSubmit(onSubmit)}>
      <RenderInputs
        inputsList={inputsToRender}
        register={register}
        errors={errors}
        controllerHooksForm={control}
        getValues={getValues}
      />
      <input type="submit" />
    </form>
  );
}
