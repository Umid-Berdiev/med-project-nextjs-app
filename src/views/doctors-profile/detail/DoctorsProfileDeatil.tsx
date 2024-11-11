import React from 'react'
import ProfileBlock from './ProfileBlock'

export default function DoctorsProfileDeatil({
  tabContentList
}: {
  tabContentList: { [key: string]: React.ReactElement }
}) {
  return (
    <div>
      <ProfileBlock />
    </div>
  )
}
