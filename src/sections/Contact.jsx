import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setFormState({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                "service_durkoce",
                "template_yhduar6",
                {
                    from_name: form.name,
                    to_name: 'Nihal',
                    from_email: form.email,
                    to_email: 'nihalramesh5@gmail.com',
                    message: form.message
                },
                '4kLalBkQRm4djOcJe'
            )

            setLoading(false);

            alert("Message sent successfully!")
        } catch (error) {
            console.error(error)
            setLoading(false);
            alert("An error occurred, please try again.")
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                <h3 className="head-text">Let's Link</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Have a question or want to work together?
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Hi, I would like to discuss..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
