import { useState, useCallback, ChangeEvent } from "react";

interface Form {
  [key: string]: string;
}

type UseInputsReturn = [
  Form,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => void
];

const useInputs = (initialForm: Form): UseInputsReturn => {
  const [form, setForm] = useState<Form>(initialForm);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((form) => ({ ...form, [name]: value }));
    },
    []
  );

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
};

export default useInputs;
