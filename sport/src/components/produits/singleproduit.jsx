import React, { Component } from 'react'


 class Singleproduit extends Component {
  render() {
     
    return (
        <div style={{ 
            width: 200,
            height:300,
            margin: 10,
            padding:23,
            backgroundColor:'blue'
        }}>
            <img  alt={this.props.book.email} />
  <div style={{ 
            backgroundColor:'gold'
                }}>
    <h5 >{this.props.book.first_name}</h5>
    <p >{this.props.book.last_name}</p>
    <a href="#!">Button</a>
  </div>
</div>
/*  <Card
        style={{ 
            width: 200,
            margin: 10
        }}
        cover={
            <img src={this.props.book.formats["image/jpeg"]} />
        }
        actions={[
            <PlusOutlined  />
        ]}
    >
        <Card.Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={this.props.book.title}
        description={this.props.book.authors[0]?.name}
        />
    </Card>
    )
  }*/
    )}
}
export default Singleproduit