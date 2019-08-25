import React from 'react';
import PropTypes from 'prop-types';

const CalendarLogo = ({ planName = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
            aria-labelledby="logo__title plan"
            width="148"
            height="36"
        >
            <g>
                <path d="M28.9 16.8c0 2.9-2.1 4.2-4.9 4.2h-1.5v4.4H20V12.8h3.7c3.2 0 5.2 1.3 5.2 4zm-2.6 0c0-1.6-1-2.2-2.6-2.2h-1.3v4.6h1.3c1.6 0 2.6-.6 2.6-2.4zM36.1 15.6l-.4 2.3c-.3-.1-.5-.1-.9-.1-1.2 0-1.8.9-2.1 2.5v5.1h-2.3v-9.7h2l.2 1.9c.5-1.4 1.4-2.2 2.5-2.2.4.1.7.1 1 .2zM45.5 20.5c0 3-1.7 5.1-4.5 5.1s-4.5-1.9-4.5-5.1c0-3 1.7-5.1 4.6-5.1 2.7.1 4.4 2 4.4 5.1zm-6.6 0c0 2.3.7 3.3 2.1 3.3 1.4 0 2.1-1 2.1-3.3s-.7-3.3-2.1-3.3c-1.4 0-2.1 1.1-2.1 3.3zM53.2 24.9c-.7.5-1.6.7-2.4.7-1.9 0-2.9-1.1-2.9-3.2v-5.1h-1.5v-1.7h1.5v-2.1l2.3-.3v2.4h2.2l-.2 1.7h-2v5c0 .9.3 1.3 1 1.3.4 0 .7-.1 1.1-.3l.9 1.6zM62.7 20.5c0 3-1.7 5.1-4.5 5.1s-4.5-1.9-4.5-5.1c0-3 1.7-5.1 4.6-5.1 2.7.1 4.4 2 4.4 5.1zm-6.6 0c0 2.3.7 3.3 2.1 3.3 1.4 0 2.1-1 2.1-3.3s-.7-3.3-2.1-3.3c-1.4 0-2.1 1.1-2.1 3.3zM72.8 18.4v7h-2.3v-6.6c0-1.2-.5-1.6-1.2-1.6-.8 0-1.5.6-2 1.5v6.7H65v-9.7h2l.2 1.3c.7-1 1.7-1.5 2.9-1.5 1.7 0 2.7 1.1 2.7 2.9zM84.1 13.8l-1.2 1.4c-.7-.6-1.5-.9-2.3-.9-1.8 0-3.1 1.3-3.1 4.7 0 3.3 1.3 4.7 3.1 4.7 1.1 0 1.8-.5 2.6-1l1.1 1.4c-.8.8-2.1 1.5-3.8 1.5-3.3 0-5.5-2.3-5.5-6.6 0-4.2 2.4-6.6 5.5-6.6 1.5.1 2.5.6 3.6 1.4zM93.5 24.1l-.5 1.5c-1.1-.1-1.8-.5-2.1-1.4-.7 1-1.7 1.4-2.9 1.4-1.9 0-3.1-1.2-3.1-3 0-2.1 1.6-3.2 4.4-3.2h1.2v-.5c0-1.3-.6-1.7-1.8-1.7-.7 0-1.6.2-2.6.5l-.5-1.6c1.2-.5 2.4-.7 3.5-.7 2.6 0 3.7 1.2 3.7 3.3v4.1c0 .8.3 1.1.7 1.3zm-3-1.3v-2h-1c-1.5 0-2.3.5-2.3 1.7 0 .9.5 1.5 1.4 1.5.9 0 1.5-.5 1.9-1.2zM95.4 23.2V11.9l2.3-.3v11.5c0 .5.2.7.5.7.2 0 .4 0 .5-.1l.5 1.6c-.4.2-.9.3-1.6.3-1.3.1-2.2-.8-2.2-2.4zM108.6 21.3h-6.1c.2 2 1.1 2.6 2.4 2.6.9 0 1.6-.3 2.4-.9l1 1.3c-.9.8-2.1 1.3-3.6 1.3-3 0-4.6-2-4.6-5 0-2.9 1.6-5.2 4.3-5.2 2.7 0 4.3 1.8 4.3 4.9 0 .3-.1.7-.1 1zm-2.3-1.6c0-1.6-.6-2.5-1.9-2.5-1.1 0-1.8.7-1.9 2.6h3.8v-.1zM118.6 18.4v7h-2.3v-6.6c0-1.2-.5-1.6-1.2-1.6-.8 0-1.5.6-2 1.5v6.7h-2.3v-9.7h2l.2 1.3c.7-1 1.7-1.5 2.9-1.5 1.7 0 2.7 1.1 2.7 2.9zM129.5 11.9v13.5h-2.1l-.2-1.2c-.6.9-1.5 1.5-2.8 1.5-2.4 0-3.7-2-3.7-5.1 0-3 1.5-5.1 3.9-5.1 1 0 1.8.4 2.4 1v-4.9l2.5.3zm-2.3 10.7v-4.4c-.5-.6-1.1-1-1.8-1-1.2 0-2 1-2 3.3 0 2.5.7 3.3 1.9 3.3.7.1 1.3-.3 1.9-1.2zM140.2 24.1l-.5 1.6c-1.1-.1-1.8-.5-2.1-1.4-.7 1-1.7 1.4-2.9 1.4-1.9 0-3.1-1.2-3.1-3 0-2.1 1.6-3.2 4.4-3.2h1.2V19c0-1.3-.6-1.7-1.8-1.7-.7 0-1.6.2-2.6.5l-.5-1.6c1.2-.5 2.4-.7 3.5-.7 2.6 0 3.7 1.2 3.7 3.3v4.1c-.1.7.2 1 .7 1.2zm-3.1-1.3v-2h-1c-1.5 0-2.3.5-2.3 1.7 0 .9.5 1.5 1.4 1.5.9 0 1.5-.5 1.9-1.2zM148 15.6l-.4 2.3c-.3-.1-.5-.1-.9-.1-1.2 0-1.8.9-2.1 2.5v5.1h-2.3v-9.7h2l.2 1.9c.5-1.4 1.4-2.2 2.5-2.2.4.1.7.1 1 .2z" />
                <g>
                    <path d="M13.1 10.2H12v-.4c0-.5-.4-1-1-1-.5 0-1 .4-1 1v.4H5v-.4c0-.5-.4-1-1-1s-1 .4-1 1v.4H2c-1.1 0-2 .9-2 2v11.3c0 1.1.9 2 2 2h11.1c1.1 0 2-.9 2-2V12.1c-.1-1-1-1.9-2-1.9zm.6 13.3c0 .4-.3.6-.6.6H2c-.4 0-.6-.3-.6-.6v-9.6h12.4v9.6z" />
                    <path d="M3.4 17.2h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H3.4c-.2 0-.3.1-.3.3v1c0 .2.2.3.3.3zM6.8 17.2h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H6.8c-.2 0-.3.1-.3.3v1c0 .2.1.3.3.3zM10.1 17.2h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3h-1.5c-.2 0-.3.1-.3.3v1c0 .2.1.3.3.3zM3.4 19.7h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H3.4c-.2 0-.3.1-.3.3v1c0 .2.2.3.3.3zM6.8 19.7h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H6.8c-.2 0-.3.1-.3.3v1c0 .2.1.3.3.3zM10.1 19.7h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3h-1.5c-.2 0-.3.1-.3.3v1c0 .2.1.3.3.3zM3.4 22.3h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H3.4c-.2 0-.3.1-.3.3v1c0 .2.2.3.3.3zM6.8 22.3h1.5c.2 0 .3-.1.3-.3v-1c0-.2-.1-.3-.3-.3H6.8c-.2 0-.3.1-.3.3v1c0 .2.1.3.3.3z" />
                </g>
            </g>
            <title id="logo__title">ProtonCalendar</title>
            {planName ? (
                <text
                    textAnchor="end"
                    className={`plan fill-${planName} uppercase bold`}
                    x="147"
                    y="42"
                    id="plan"
                    focusable={false}
                >
                    {planName}
                </text>
            ) : null}
        </svg>
    );
};

CalendarLogo.propTypes = {
    planName: PropTypes.string
};

export default CalendarLogo;