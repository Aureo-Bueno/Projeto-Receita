import * as Yup from 'yup';

export default Yup.object().shape({
   name: Yup.string().min(4).required(),
})