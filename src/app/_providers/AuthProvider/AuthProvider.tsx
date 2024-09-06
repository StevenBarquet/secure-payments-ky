'use client'; // This is a client component 👈🏽
import { type ChangeEvent, type ReactNode } from 'react';
import style from './AuthProvider.module.scss';
import { useUserInfoStore } from 'src/app/_store/userInfo';
import { LabelGridInput } from 'src/app/_common/FormControl/LabelGridInput/LabelGridInput';
import { Input } from 'antd';
import { useInput } from 'src/app/_utils/hooks/useInput';
import { allEnvs } from 'src/shared/config/allEnvs';

interface Props {
  children: ReactNode;
}

/**
 * AuthProvider Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export function AuthProvider({ children }: Props) {
  // -----------------------CONSTS, HOOKS, STATES
  const { isAuth, update } = useUserInfoStore();
  const { onChange, value } = useInput();
  // -----------------------MAIN METHODS
  const trueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (e.target.value === allEnvs.NEXT_PUBLIC_AUTH_PASS) {
      update({ isAuth: true });
    }
  };
  // -----------------------AUX METHODS
  // -----------------------RENDER
  if (isAuth) return <>{children}</>;
  return (
    <div className={style.AuthProvider}>
      <h1>No Autorizado</h1>
      <LabelGridInput label="Token">
        <Input onChange={trueOnChange} value={value} />
      </LabelGridInput>
    </div>
  );
}
