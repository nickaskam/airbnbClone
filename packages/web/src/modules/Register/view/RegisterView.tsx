import React, { PureComponent } from "react";
import { Form, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleBlur, handleSubmit } = this.props;
    return (
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: "auto" }}>
          <Form.Item label="Username">
            <Input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Or <a href="">Login now!</a>
          </Form.Item>
        </div>
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
