import React, { InputHTMLAttributes } from "react";
import Icon from "@material-ui/core/Icon";
import { Field, useField } from "formik";
import { InputLabel, makeStyles } from "@material-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  icon: string;
};
const useStyles = makeStyles((theme) => ({
  input: {
     width: '100%',
     display: 'flex',
     marginLeft: '-2.5rem', 
     paddingLeft: '2.5rem', 
     paddingRight: '0.75rem', 
     paddingTop: '0.5rem',
     borderRadius: '0.5rem', 
     borderWidth: '2px', 
     alignItems:'center',
     outline:'2px solid transparent',
     outlineOffset: '2px',
     borderColor: '#222',
     borderStyle: 'solid',
     height: '40px'
  },
  PositionIcon: {
    width: '2.5rem',
    zIndex: 10,
    paddingLeft: '0.25rem',
    textAlign: 'center',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function InputField({ label, icon, ...props }: InputFieldProps) {
  const [field] = useField(props);
  const classes = useStyles();
  return (
    <div>
      <InputLabel  htmlFor={field.name} style={{ marginTop: '10px', fontSize: '12px'}}>{label}</InputLabel >
        <div style={{display: 'flex'}}>
          <div className={classes.PositionIcon}>
          <Icon>{icon}</Icon>
          </div>
        <Field
          className={classes.input}
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder ?? ""}
        />
        </div>
    </div>
  );
}

export default InputField;
