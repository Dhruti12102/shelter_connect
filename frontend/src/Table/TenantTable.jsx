import React from 'react'
import StaffDashboard from '../components/StaffDashboard'
import ParentComponent from '../components/ParentComponent'
import TTable from '../components/TTable'

export default function TenantTable() {
    return (
        <div>
            <StaffDashboard />
            <ParentComponent />
            <TTable />
        </div>
    )
}
