import { login, signup } from './actions'

export default function Login() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <br />
      <br />
      {/* <label htmlFor="firstName">First Name:</label>
      <input id="firstName" name="firstName" type="text" required />
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required />
      <label htmlFor="username">Username:</label>
      <input id="username" name="username" type="text" required /> */}
      <button formAction={login}>Log in</button>
      <br />
      <button formAction={signup}>Sign up</button>
    </form>
  );
}