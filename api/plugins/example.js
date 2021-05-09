'use-strict';

const example = {
    name: 'example',
    version: '1.0.0',
    register: async function () {
        try {
            // YOUR LOGIC GOES HERE
            return null;
        } catch (err) {
            console.error('Error: ', err);
        }
    }
};

module.exports = example;
