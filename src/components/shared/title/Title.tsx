/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

type propTypes = {
    title: string;
    subtitle: string;
}

const Title = ({ title, subtitle }: propTypes) : JSX.Element => {
    return (
        <div className="text-center md:space-y-4 space-y-2">
            <p className='lg:text-3xl md:text-2xl text-lg font-bold text-primary'><span>&quot;</span> {title} <span>&quot;</span></p>
            <p className="md:text-lg text-secondary font-bold">{subtitle}</p>
        </div>
    );
};

export default Title;