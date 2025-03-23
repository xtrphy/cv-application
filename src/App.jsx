import './styles/App.css';
import { useState } from 'react';
import MyButton from './components/UI/MyButton/MyButton';
import FormSection from './components/UI/FormSection';

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
          <FormSection
            title="General Info"
            fields={[
              { name: "firstName", placeholder: "First Name", type: "text" },
              { name: "lastName", placeholder: "Last Name", type: "text" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "phone", placeholder: "Phone number", type: "text" },
            ]}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            disabled={disabled}
          />

          <FormSection
            title="Educational Experience"
            fields={[
              { name: "school", placeholder: "School", type: "text" },
              { name: "degree", placeholder: "Degree", type: "text" },
              { name: "schoolCity", placeholder: "City", type: "text" },
              { name: "schoolStartDate", placeholder: "Start date", type: "date" },
              { name: "schoolEndDate", placeholder: "End date", type: "date" },
            ]}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            disabled={disabled}
          />

          <FormSection
            title="Work Experience"
            fields={[
              { name: "position", placeholder: "Position", type: "text" },
              { name: "employer", placeholder: "Employer", type: "text" },
              { name: "workCity", placeholder: "City", type: "text" },
              { name: "workStartDate", placeholder: "Start date", type: "date" },
              { name: "workEndDate", placeholder: "End date", type: "date" },
            ]}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            disabled={disabled}
          />
          <div className="btn-container">
            <MyButton children={'Submit'} onClick={handleSubmitButton} />
            <MyButton children={'Edit'} onClick={handleEditButton} />
          </div>
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