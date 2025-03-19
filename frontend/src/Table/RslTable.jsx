import React from 'react'
import StaffDashboard from '../components/StaffDashboard'
// import RslAddForm from '../components/RslAddForm'
import RslListing from '../components/RslListing'

export default function RslTable() {
    return (
        <div>
            <StaffDashboard />
            {/* <RslAddForm /> */}
            <RslListing />
        </div>
    )
}
