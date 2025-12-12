let On = false;

let Off = true;

let Restart = false;

function isotype() {

}

function vmtype() {

}

function vms() {

}


function start() {
    if (On === true) {
        alert('Already On!');
        console.log('Already On!');
    }
    else if (Restart === true) {
        alert('VM Is Already Restarting!');
        console.log('VM Is Already Restarting!');
    }
    else if (Off === true && On === false && Restart === false) {
        console.log('Starting');
        
    }
}

function stop() {
    if (Off === true) {
        alert('Already Off!');
        console.log('Already Off!');
    }
    else if (Restart === true) {
        alert('VM Is Already Restarting!');
        console.log('VM Is Already Restarting!');
    }
    else if (Off === false && On === true && Restart === false) {
        console.log('Stoping');
        fetch('http://localhost:5001/api/vm/stop', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('API call failed with status: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('VM Stopped Successfully!');
        })
        .catch((error) => {
            console.error('Error stopping VM:', error);
            alert('Failed to stop VM due to an API error.');
        });
    }
}

function restart() {
    if (On === false) {
        alert('VM Off! Cannot Restart');
        console.log('VM Off! Cannot Restart');
    } else if (Restart === true) {
        alert('VM Is Already Restarting!');
        console.log('VM Is Already Restarting!');
    } else if (Off === true && On === false && Restart === false) {
        console.log('Restrarting');
        
    }
}
