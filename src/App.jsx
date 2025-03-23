import './styles/App.css';
import MyInput from './components/UI/MyInput/MyInput';
import { useState } from 'react';
import MyButton from './components/UI/MyButton/MyButton';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({ firstName: '', lastName: '', email: '', phone: '', school: '', degree: '', schoolStartDate: '', schoolEndDate: '', schoolCity: '', position: '', employer: '', workStartDate: '', workEndDate: '', workCity: '' });
  const [disabled, setDisabled] = useState(false);

  function handleSubmitButton(e) {
    e.preventDefault();
    setDisabled(true);
  }

  function handleEditButton(e) {
    e.preventDefault()
    setDisabled(false);
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form>
            <h2 style={{ marginBottom: '20px' }}>General Info</h2>
            <MyInput disabled={disabled} placeholder='First Name' onChange={e => setGeneralInfo({ ...generalInfo, firstName: e.target.value })} value={generalInfo.firstName} type="text" />

            <MyInput disabled={disabled} placeholder='Last Name' onChange={e => setGeneralInfo({ ...generalInfo, lastName: e.target.value })} value={generalInfo.lastName} type="text" />

            <MyInput disabled={disabled} placeholder='Email' onChange={e => setGeneralInfo({ ...generalInfo, email: e.target.value })} value={generalInfo.email} type="email" />

            <MyInput disabled={disabled} placeholder='Phone number' onChange={e => setGeneralInfo({ ...generalInfo, phone: e.target.value })} value={generalInfo.phone} type="text" />
          </form>

          <form>
            <h2 style={{ marginBottom: '20px' }}>Educational Experience</h2>
            <MyInput disabled={disabled} placeholder='School' onChange={e => setGeneralInfo({ ...generalInfo, school: e.target.value })} value={generalInfo.school} type="text" />

            <MyInput disabled={disabled} placeholder='Degree' onChange={e => setGeneralInfo({ ...generalInfo, degree: e.target.value })} value={generalInfo.degree} type="text" />

            <MyInput disabled={disabled} placeholder='City' onChange={e => setGeneralInfo({ ...generalInfo, schoolCity: e.target.value })} value={generalInfo.schoolCity} type="text" />

            <MyInput disabled={disabled} placeholder='Start date' onChange={e => setGeneralInfo({ ...generalInfo, schoolStartDate: e.target.value })} value={generalInfo.schoolStartDate} type="date" />

            <MyInput disabled={disabled} placeholder='End date' onChange={e => setGeneralInfo({ ...generalInfo, schoolEndDate: e.target.value })} value={generalInfo.schoolEndDate} type="date" />
          </form>

          <form>
            <h2 style={{ marginBottom: '20px' }}>Work Experience</h2>
            <MyInput disabled={disabled} placeholder='Position' onChange={e => setGeneralInfo({ ...generalInfo, position: e.target.value })} value={generalInfo.position} type="text" />

            <MyInput disabled={disabled} placeholder='Employer' onChange={e => setGeneralInfo({ ...generalInfo, employer: e.target.value })} value={generalInfo.employer} type="text" />

            <MyInput disabled={disabled} placeholder='City' onChange={e => setGeneralInfo({ ...generalInfo, workCity: e.target.value })} value={generalInfo.workCity} type="text" />

            <MyInput disabled={disabled} placeholder='Start date' onChange={e => setGeneralInfo({ ...generalInfo, workStartDate: e.target.value })} value={generalInfo.workStartDate} type="date" />

            <MyInput disabled={disabled} placeholder='End date' onChange={e => setGeneralInfo({ ...generalInfo, workEndDate: e.target.value })} value={generalInfo.workEndDate} type="date" />

            <MyButton children={'Submit'} onClick={handleSubmitButton} />
            <MyButton children={'Edit'} onClick={handleEditButton} />
          </form>
        </div>

        <div className="resume">
          <div className="general-info">
            <h1 className='full-name'>
              {generalInfo.firstName ? generalInfo.firstName + ' ' + generalInfo.lastName : 'About Me'}
            </h1>


            {generalInfo.email
              ? <p className='about-me'><i className="fa-solid fa-envelope"></i>{generalInfo.email}</p>
              : <p className='about-me'><i className="fa-solid fa-envelope"></i>email@example.com</p>
            }

            {generalInfo.phone
              ? <p className='about-me'><i className="fa-solid fa-phone"></i>{generalInfo.phone}</p>
              : <p className="about-me"><i className="fa-solid fa-phone"></i>{'+0 (123) 456 78-90'}</p>}
            <h1 className='title'>Educational Experience</h1>
            {generalInfo.school
              ? <p className='education'>School: {generalInfo.school}</p>
              : ''
            }

            {generalInfo.degree
              ? <p className='education'>Degree: {generalInfo.degree}</p>
              : ''
            }

            {generalInfo.schoolCity
              ? <p className='education'>City: {generalInfo.schoolCity}</p>
              : ''
            }

            {generalInfo.schoolStartDate
              ? <p className='education'>Start date: {generalInfo.schoolStartDate}</p>
              : ''
            }

            {generalInfo.schoolEndDate
              ? <p className='education'>End date: {generalInfo.schoolEndDate}</p>
              : ''
            }
          </div>
          <div className="advanced-info">
            <h1 className='general-title'>Work Experience</h1>
            {generalInfo.position
              ? <p className='work'>Position: {generalInfo.position}</p>
              : ''
            }

            {generalInfo.employer
              ? <p className='work'>Employer: {generalInfo.employer}</p>
              : ''
            }

            {generalInfo.workCity
              ? <p className='work'>City: {generalInfo.workCity}</p>
              : ''
            }

            {generalInfo.workStartDate
              ? <p className='work'>Start date: {generalInfo.workStartDate}</p>
              : ''
            }

            {generalInfo.workEndDate
              ? <p className='work'>End date: {generalInfo.workEndDate}</p>
              : ''
            }
          </div>
        </div>
      </div>
    </>
  );
}