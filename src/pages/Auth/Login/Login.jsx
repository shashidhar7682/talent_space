import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginContext } from '../../../contexts/loginContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { webContext } from '../../../contexts/webContext';

function Login() {
  let [
  sideBarStatus,
  changeSideBarStatus
  ] = useContext(webContext);
  changeSideBarStatus(false)
  let [, loginUser, userLoginStatus, loginErr,] = useContext(loginContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const submitForm = async (userCredObj) => {
    try {
      setLoading(true);
      loginUser(userCredObj);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userLoginStatus) {
      navigate('/dashboard');
    }
  }, [loading, userLoginStatus]);

  const fadeInFromLeftAnimation = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(-20px)" },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeInFromLeftAnimation} className="Lcontainer p-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-4 border bg-white bg-opacity-10 ">
          <div className="card-body" width="100%" height="100%">
            <div className="text-center mb-4">
              <h1 >Sign In</h1>
              <p>The key to happiness is to sign in.</p>
            </div>
            <div className="d-block">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "* Username is required",
                        },
                        minLength: {
                          value: 4,
                          message: "* Username is Too Small",
                        },
                        maxLength: {
                          value: 12,
                          message: "* Username is Too Big",
                        },
                      })}
                      className="form-control-lg"
                    />
                  </FloatingLabel>
                  {errors.username?.message && (
                    <p className="text-danger">{errors.username?.message}</p>
                  )}
                </div>
                <div className="mb-3">
                  <FloatingLabel
                    controlId="floatingInput1"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "* Password is required",
                        },
                        minLength: {
                          value: 8,
                          message: "* Password is Too Small",
                        },
                        maxLength: {
                          value: 16,
                          message: "* Password is Too Big",
                        },
                      })}
                      className="form-control-lg"
                    />
                  </FloatingLabel>
                  {errors.password?.message && (
                    <p className="text-danger">{errors.password?.message}</p>
                  )}
                </div>
                <p className=" mb-3">
                  Forget Password?
                  <NavLink className="p-3" to="/reset-password">
                    Reset here
                  </NavLink>
                </p>
                <div className="text-center">
                  {loginErr?.length !== 0 && (
                    <p className="text-danger text-left text-center mb-3">
                      {loginErr}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="col-lg-6 bg-secondary border-secondary fw-bold"
                    disabled={isSubmitting}
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Login;