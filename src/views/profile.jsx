var React = require('react');
var Layout = require('./layout.jsx');


var Component = React.createClass({
    render: function () {
        var errors = (this.props.errors && this.props.errors.length)
            ? <p>{this.props.errors}</p>
            : null;

        var user = (this.props.user)
            ? <div>Profile page for user - {this.props.user.email}</div>
            : null;

        return (
            <Layout title="Profile">
                <h1>Profile Page</h1>

                {errors}
                {user}

            </Layout>
        );
    }
});


module.exports = Component;