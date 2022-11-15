import React from 'react'
import Exprience from '../addExprieance'
import AddEducation from '../addEducation'
import AddQualification from '../addQualication'
import ProfileSection from '../profileSection'

const PublicRender = () => {
  return (
    <div>
      <ProfileSection/>
        <AddEducation/>
        <Exprience/>
        <AddQualification/>
    </div>
  )
}

export default PublicRender