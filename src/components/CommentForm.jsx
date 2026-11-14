import { useState } from 'react';

export default function CommentForm({ onSubmit }) {
    const [formInput, setFormInput] = useState({ name: '', message: '' });

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formInput.name.trim() || !formInput.message.trim()){
            return;
        }

        onSubmit(formInput);

        setFormInput({name: "", message: ""});
    };

	return (
			<form className="comment-form" onSubmit={handleSubmit}>
                <h1>Leave a Comment</h1>
                <input type="text" placeholder="Name" value={formInput.name} onChange={(e) => setFormInput({ ...formInput, name: e.target.value })} />
                <textarea placeholder="Message" rows="5" value={formInput.message} onChange={(e) => setFormInput({ ...formInput, message: e.target.value })} />
                {error && <p className="form-error">{error}</p>}
                <button type="submit">Send</button>
            </form>
	);
}
