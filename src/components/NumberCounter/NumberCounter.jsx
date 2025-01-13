import React from 'react'
import CountUp from 'react-countup';

const NumberCounter = () => {
  return (
    <div className='bg-secondary text-white py-12'>
        <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                        start={0}
                        end={898}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyDelay={true}
                    />
                </p>
                <p>Expert Tutors</p>
            </div>
            <div className='text-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                        end={2000}
                        separator=','
                        suffix='+'
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyDelay={true}
                    />
                </p>
                <p>Hours Content</p>
            </div>
            <div className='text-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                        end={289}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyDelay={true}
                    />
                </p>
                <p>Subjects and courses</p>
            </div>
            <div className='text-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                        end={56789}
                        separator=','
                        suffix='+'
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyDelay={true}
                    />
                </p>
                <p>Active students</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter