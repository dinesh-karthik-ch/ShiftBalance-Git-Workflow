document.addEventListener("DOMContentLoaded", function () {

    const createScheduleBtn = document.querySelector(".btn-primary");
    const actionButtons = document.querySelectorAll(".action-btn");

    // Create Schedule
    createScheduleBtn.addEventListener("click", function () {
        const scheduleModal = new bootstrap.Modal(
            document.getElementById("scheduleModal")
        );

        scheduleModal.show();
    });

    // Quick Actions
    actionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const action = button.textContent.trim();

            if (action.includes("Generate Weekly Schedule")) {
                generateSchedule();
            }

            else if (action.includes("Manage Employees")) {
                showEmployees();
            }

            else if (action.includes("Review Leave Requests")) {
                showLeaveRequests();
            }

            else if (action.includes("Resolve Scheduling Conflicts")) {
                resolveConflict();
            }
        });

    });

    // Generate schedule
    function generateSchedule() {

        const shiftCount = document.getElementById("shiftCount");

        shiftCount.textContent = "15";

        alert(
            "Weekly schedule generated successfully based on employee availability."
        );
    }

    // Employee management
    function showEmployees() {

        const employeeModal = new bootstrap.Modal(
            document.getElementById("employeeModal")
        );

        employeeModal.show();
    }

    // Leave requests
    function showLeaveRequests() {

        const leaveModal = new bootstrap.Modal(
            document.getElementById("leaveModal")
        );

        leaveModal.show();
    }

    // Resolve conflict
    function resolveConflict() {

        const conflictModal = new bootstrap.Modal(
            document.getElementById("conflictModal")
        );

        conflictModal.show();
    }

    // Leave approval
    document.addEventListener("click", function (event) {

        if (event.target.classList.contains("approve-btn")) {

            event.target.parentElement.innerHTML =
                '<span class="badge bg-success">Approved</span>';

        }

        if (event.target.classList.contains("reject-btn")) {

            event.target.parentElement.innerHTML =
                '<span class="badge bg-danger">Rejected</span>';

        }

    });

});