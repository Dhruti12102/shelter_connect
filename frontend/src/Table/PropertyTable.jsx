import React from 'react'
import StaffDashboard from '../components/StaffDashboard'
import Property from '../components/Property'
import Addproperty from '../components/Addproperty'
export default function PropertyTable() {
    return (
        <div>
            <StaffDashboard />
            <Addproperty />
            <Property />
        </div>
    )
}
