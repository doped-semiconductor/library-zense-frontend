'use client'
import React, { FormEvent, useState } from 'react'
import styles from '../login/login.module.css'
const page = () => {
    
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        console.log('handleLogin() is working...')

        // Post request to login api to be written here
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className={styles.loginDiv}>
        <h1 className={styles.loginHeading}> Login </h1>

        <form method='post' onSubmit={(e) => handleLogin(e)} className={styles.loginForm}>
            <div className={styles.loginInputDiv}> 
                <label className={styles.loginLabel} htmlFor='email'> 
                    Email :
                </label>

                <input
                    id='email' 
                    className={styles.loginInput} 
                    type='email' 
                    placeholder='youremail@iiitb.ac.in' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className={styles.loginInputDiv}> 
                <label className={styles.loginLabel} htmlFor='password'> Password :</label>
                <input 
                    id='password' 
                    className={styles.loginInput} 
                    type='password' 
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit' className={styles.loginButton}> Login </button>
        </form>
    </div>
  )
}

export default page
