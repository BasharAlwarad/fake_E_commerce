import { useFormStatus } from 'react-dom';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-full py-2 rounded text-white ${
        pending
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

const Login = () => {
  const handleSubmit = async (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        action={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-box bg-base-100 p-6 shadow"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full"
        />
        <Submit />
      </form>
    </main>
  );
};

export default Login;
