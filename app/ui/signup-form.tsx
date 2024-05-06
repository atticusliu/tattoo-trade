'use client'
import { useFormState } from 'react-dom';
import { signup } from '@/actions/auth';

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form action={action}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" />
      </div>
      {state?.errors?.firstName && <p>{state.errors.firstName}</p>}

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Smith" />
      </div>
      {state?.errors?.lastName && <p>{state.errors.lastName}</p>}

      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" placeholder="janesmith3" />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button>Sign Up</button>
      {/* <SignupButton /> */}
    </form>
  );
}