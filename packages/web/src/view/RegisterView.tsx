import React, { PureComponent } from "react";
import { Form, Input, Button } from "antd";

export class RegisterView extends PureComponent {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
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
      </div>
    );
  }
}
