import React, { useState } from 'react'
import '../App.css'

const Main = () => {
    const study = [
        "6 + 4 * 2 - 3 / 1",
        "8 / 2 * 3 + 5 - 1",
        "10 + 2 * 3 - 6 / 2",
        "5 * 2 + 7 / 1 - 3",
        "9 / 3 + 6 * 2 - 4",
        "7 - 2 * 4 + 8 / 2",
        "12 / 3 + 5 - 1 * 2",
        "4 + 3 * 2 - 8 / 2",
        "6 / 3 * 4 + 2 - 1",
        "9 * 2 - 5 + 7 / 1",
    ];

    const [idx, setIndex] = useState(0);
    const onClickforward = () => {
        if (idx < 9) {
            setIndex((prev) => prev + 1);
        }
    }
    const onClickbackward = () => {
        if (idx > 0) {
            setIndex((prev) => prev - 1);
        }
    }
    const onReload = () => {
        setIndex(0);
    }

    return (
        <main>
            <div className="directory" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '102px', marginTop: '50px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2" width='20px' height='20px'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2" width='15px' height='15px'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span style={{ fontSize: '15px' }}>FlashCard</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2" width='15px' height='15px'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span style={{ fontSize: '15px' }}>Mathematics</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2" width='15px' height='15px'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span style={{ fontSize: '15px', color: 'rgb(17, 64, 157)', fontWeight: 'bold' }}>Relation and Function</span>
            </div>

            <h2 className='mainHead' style={{ marginLeft: '105px', marginTop: '50px' }}>Relation and Functions (Mathematics)</h2>
            <div className="containerSelect">
                <ul style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                    <li>Study</li>
                    <li>Quiz</li>
                    <li>Test</li>
                    <li>Game</li>
                    <li>Others</li>
                </ul>
            </div>

            <div className="box-container">
                <div>
                    <div className="mainbox">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6" id='hits' width='25px' height='25px' >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" class="w-6 h-6" id='volume' width='25px' height='25px'>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                        <div className="content">
                            {study[idx]}
                        </div>

                    </div>
                    <div className="slidepart">
                        <img src='Vector (2).png' alt='reload' onClick={onReload} />
                        <img src='Vector.png' alt='reload' onClick={onClickbackward} />
                        <span>{idx + 1}/10</span>
                        <img src='Vector (1).png' alt='reload' onClick={onClickforward} />
                        <img src='Vector (3).png' alt='reload' />
                    </div>
                </div>
            </div>

            <div className="middlelast">
                <img src="brand.png" alt="Brandlogo" />
                <div className='middle'>
                    <img src="sum.png" alt="Create" width='40px' height='40px' />
                    <span>Create Flashcard</span>
                </div>
            </div>

            <h2 style={{ fontSize: '30px', color: 'rgb(17, 64, 157)', fontWeight: 'bold', marginLeft: '105px', marginTop: '70px' }}>FAQ</h2>
        </main>
    )
}

export default Main
