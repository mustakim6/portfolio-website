
 const fadeUp = {
  hidden: { opacity: 0, y: 140 },
  show: {
    opacity: 1,
    y: 0,
    
    transition: {duration:2 },
  },
};
// motion for skills card start here
const stagChildrens = {
    hidden:{},
    
    show: {
        transition:{
            staggerChildren:0.6
        },
    },
}

const item = {
    hidden: { y:20, opacity:0},
    show:{
        y:0,
        opacity:1,
        transition:{ duration:0.5, ease:'easeOut'},

    },
    hover: { y: -10, scale: 1 }
}
// motion for skills card end here.


    //   variants={fadeUp}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: true }}

export {fadeUp, stagChildrens, item};