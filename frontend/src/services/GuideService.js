import axios from 'axios';

export function getGuides() {
  return axios.get('http://127.0.0.1:8000/guides/')
    .then(response => response.data)
}

export function deleteGuide(guideId) {
  return axios.delete('http://127.0.0.1:8000/guides/' + guideId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addGuide(guide){
  return axios.post('http://127.0.0.1:8000/guides/', {
    studentId:null,
    FirstName:guide.FirstName.value,
    LastName:guide.LastName.value,
    RegistrationNo:guide.RegistrationNo.value,
    Email:guide.Email.value,
  })
    .then(response=>response.data)
}

export function updateGuide(guiid, guide) {
  return axios.put('http://127.0.0.1:8000/guides/' + guiid + '/', {
    FirstName:guide.FirstName.value,
    LastName:guide.LastName.value,
    RegistrationNo:guide.RegistrationNo.value,
    Email:guide.Email.value
  })
   .then(response => response.data)
}