import { useState } from 'react';

export default function CommentForm({ onSubmit, username }) {
const [formInput, setFormInput] = useState({ message: '' });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formInput.message.trim()) {
        return;
    }

    onSubmit({
        name: username,
        message: formInput.message
    });

    setFormInput({ message: '' });
};

	return (
			<form className="comment-form" onSubmit={handleSubmit}>
                <h1>Leave a Comment</h1>
                <textarea placeholder="Message" rows="5" value={formInput.message} onChange={(e) => setFormInput({ ...formInput, message: e.target.value })} />
                {error && <p className="form-error">{error}</p>}
                <button type="submit">Send</button>
            </form>
	);
}
