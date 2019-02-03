import React from "react";

// export default class PhotoDisplay extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       photos: [],
//       currentImage: 0
//     };

//     this.changeImage = this.changeImage.bind(this)
//   }

//   changeImage(direction) {
//     if (direction === "next") {
//       if (this.state.currentImage === this.props.photos.length - 1) {
//         this.setState({ currentImage: 0 });
//       } else {
//         this.setState({ currentImage: this.state.currentImage + 1 });
//       }
//     } else {
//       if (this.state.currentImage === 0) {
//         this.setState({ currentImage: this.props.photos.length - 1 });
//       } else {
//         this.setState({ currentImage: this.state.currentImage - 1 });
//       }
//     }
//   };

//   componentDidMount(){
//     const photoRefresh = this.props.photos
//     this.setState({ 
//       photos: photoRefresh,
//       currentImage: 0
//      })
//   }

//   render() {
//     {
//       console.log(this.props)
//     }
//     return (
//       <div id="photo-display-container">
//         <i
//           className="icon-chevron-left direction-arrow"
//           onClick={() => this.changeImage("previous")}
//       />  
//           <img
//             src={this.props.photos[this.state.currentImage].photoUrl}
//             id="currentImage"
//             alt="loading..."
//           />
        
//         <i
//           className="icon-chevron-right direction-arrow"
//           onClick={() => this.changeImage("next")}
//         />
//       </div>
//     );
//   }
// }

const PhotoDisplay = props => {

  return (
    <div id="photo-display-container">
      <i
        className="icon-chevron-left direction-arrow"
        onClick={() => props.changeImage("previous")}
      />
      <img
        src={props.photo.photoUrl}
        id="currentImage"
        alt="loading..."
      />
      <i
        className="icon-chevron-right direction-arrow"
        onClick={() => props.changeImage("next")}        
      />
    </div>
  );
};

export default PhotoDisplay