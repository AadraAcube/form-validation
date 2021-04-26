import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { CustomButton as Button } from "./Button";

// const ValidationForm = {
//   myCoolButton: {
//     paddingTop: "10vh",
//     paddingBottom: "10vh",
//     paddingRight: "10vw",
//     paddingLeft: "10vw",
//   },
// };

const initialState = {
  email: "",
  Username: "",
  age: "",
  gender: "",
  bloodgroup: "",
  dob: "",
  mobilenumber: "",
  address: "",
  nationality: "",
  password: "",
  emailError: "",
  UsernameError: "",
  ageError: "",
  genderError: "",
  bloodgroupError: "",
  dobError: "",
  mobilenumberError: "",
  addressError: "",
  nationalityError: "",
  passwordError: "",
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let UsernameError = "";
    let emailError = "";
    let ageError = "";
    let genderError = "";
    let bloodgroupError = "";
    let dobError = "";
    let mobilenumberError = "";
    let addressError = "";
    let nationalityError = "";
    let passwordError = "";

    if (!this.state.Username) {
      UsernameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid Username";
    }
    if (!this.state.age) {
      ageError = "age cannot be blank";
    }
    if (!this.state.gender) {
      genderError = "gender cannot be blank";
    }
    if (!this.state.bloodgroup) {
      bloodgroupError = "bloodgroup cannot be blank";
    }
    if (!this.state.dob) {
      dobError = "dob cannot be blank";
    }
    if (!this.state.mobilenumber) {
      mobilenumberError = "mobilenumber cannot be blank";
    }
    if (!this.state.address) {
      addressError = "address cannot be blank";
    }
    if (!this.state.nationality) {
      nationalityError = "nationality cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (UsernameError || emailError) {
      this.setState({
        passwordError,
        nationalityError,
        addressError,
        mobilenumberError,
        dobError,
        bloodgroupError,
        genderError,
        ageError,
        UsernameError,
        emailError,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validate();
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ backgroundColor: "AliceBlue" }}
        className="p-3"
      >
        <FormGroup row>
          <Label for="exampleUsername" sm={2}>
            Username
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="Username"
              id="exampleUsername"
              placeholder="Enter your username:"
              value={this.state.Username}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.UsernameError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplegender" sm={2}>
            Gender
          </Label>
          <Col sm={10}>
            <Input type="select" name="gender" id="examplegender">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleage" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="age"
              id="exampleage"
              placeholder="Enter your age:"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.ageError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleemail" sm={2}>
            E-mail
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleemail"
              placeholder="Enter your e-mail:"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.emailError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplebloodgroup" sm={2}>
            Blood-Group
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="bloodgroup"
              id="examplebloodgroup"
              placeholder="Enter your bloodgroup:"
              value={this.state.bloodgroup}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.bloodgroupError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampledob" sm={2}>
            DOB
          </Label>
          <Col sm={10}>
            <Input
              type="date"
              name="dob"
              id="exampledob"
              placeholder="Enter your dob:"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.dobError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplemobilenumber" sm={2}>
            Mobile-Number
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="mobilenumber"
              id="examplemobilenumber"
              placeholder="Enter your mobilenumber:"
              value={this.state.mobilenumber}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.mobilenumberError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleaddress" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="address"
              id="exampleaddress"
              placeholder="Enter your address:"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.addressError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplenationality" sm={2}>
            Nationality
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="nationality"
              id="examplenationality"
              placeholder="Enter your nationality:"
              value={this.state.nationality}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.nationalityError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter your password: "
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              {this.state.passwordError}
            </div>
          </Col>
        </FormGroup>

        <Button />
      </Form>
    );
  }
}
