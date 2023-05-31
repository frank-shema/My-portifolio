import React from 'react'
import {motion} from 'framer-motion'
 import {styles} from '../styles'
 import {staggerContainer} from '../utils/motion'

const  SectionWrapper=(Component,idName) =>
function HOC(){
return(
    <motion.section  style={{ marginLeft: '12%' }} variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true,amount:0.25}} className={`${styles.padding} max-w-7xl max-auto relative z-0`}>
        <span className='hashspan' id={idName}>&nbsp;</span>
        <Component/>
    </motion.section>
)
}

export default SectionWrapper



