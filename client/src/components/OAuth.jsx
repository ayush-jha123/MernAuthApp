import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSLice';
import { useDispatch } from 'react-redux';

export default function OAuth() {
  const dispatch=useDispatch();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider)
            console.log(result);
            const res=await fetch('/api/auth/google',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
              })
            })
            const data=await res.json();
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log("could not login with google",error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 rounded-lg p-2 text-white uppercase hover:opacity-95'>Continue With Google</button>
    //Default type of button is submit 
  )
}
