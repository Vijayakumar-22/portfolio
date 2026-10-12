
import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     const isNameEmpty = name.trim() === "";
    //     const isEmailEmpty = email.trim() === "";
    //     const isMessageEmpty = message.trim() === "";

    //     setNameError(isNameEmpty);
    //     setEmailError(isEmailEmpty);
    //     setMessageError(isMessageEmpty);

    //     if (isNameEmpty || isEmailEmpty || isMessageEmpty) {
    //         return;
    //     }

    //     const subject = encodeURIComponent(
    //         `Job Opportunity Enquiry from ${name.trim()}`
    //     );

    //     const body = encodeURIComponent(
    //         `Name: ${name.trim()}\n` +
    //         `Email / Phone: ${email.trim()}\n\n` +
    //         `Message:\n${message.trim()}`
    //     );

    //     window.location.href =
    //         `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    // };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>

                    <p>
                        I'm a Full-Stack Developer with 1 year of experience
                        building web applications using React.js, Node.js,
                        PHP Laravel, and SQL. I'm currently looking for
                        full-time software development opportunities.
                        Feel free to contact me regarding job openings,
                        referrals, or professional networking.
                    </p>

                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="contact-form"
                        // onSubmit={sendEmail}
                    >
                        <div className="form-flex">
                            <TextField
                                required
                                id="contact-name"
                                label="Your Name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError(false);
                                }}
                                error={nameError}
                                helperText={
                                    nameError ? "Please enter your name" : ""
                                }
                                fullWidth
                            />

                            <TextField
                                required
                                id="contact-email"
                                label="Email / Phone"
                                placeholder="How can I reach you?"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(false);
                                }}
                                error={emailError}
                                helperText={
                                    emailError
                                        ? "Please enter your email or phone number"
                                        : ""
                                }
                                fullWidth
                            />
                        </div>

                        <TextField
                            required
                            id="contact-message"
                            label="Message"
                            placeholder="Write your job opportunity or referral details"
                            multiline
                            rows={6}
                            className="body-form"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setMessageError(false);
                            }}
                            error={messageError}
                            helperText={
                                messageError ? "Please enter a message" : ""
                            }
                            fullWidth
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Contact Me
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
