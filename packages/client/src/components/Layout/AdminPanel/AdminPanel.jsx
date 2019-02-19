import React, { useState } from 'react';

import AddInterviewDay from './AddInterviewDay/AddInterviewDay';

function AdminPanel(props) {
    return (
        <div style={{direction: 'rtl'}}>
            <h1>Admin Panel</h1>
            <AddInterviewDay />
        </div>
    )
}

export default AdminPanel;