$( document ).ready(function() {

});

var App = React.createClass({
    getInitialState: function() {
        return {
            showProjects: false,
            showExperience: false,
            showGridNav: true,
            showAbout: false,
            showContact: false
        };
    },

    componentDidMount: function() {
      
    },  

    toggleProjects: function() {
        this.setState({
            showProjects: this.state.showProjects == true ? false : true
        });
    },

    toggleExperience: function() {
        this.setState({
            showExperience: this.state.showExperience == true ? false : true
        });
    },

    render: function() {
      return (
        <div id="app">
            <Navigation toggleProjects={this.toggleProjects} toggleExperience={this.toggleExperience} />
            <div className="col-xs-6 col-lg-offset-3 col-md-offset-3">
                <GridNavigation showGridNav={this.state.showGridNav} toggleExperience={this.toggleExperience} toggleProjects={this.toggleProjects} />
                <Experience showExperience={this.state.showExperience} />
                <ProjectGrid toggleProjects={this.toggleProjects} showProjects={this.state.showProjects} />
            </div>
        </div>
      );
    }
  });

 

  var Navigation = React.createClass({
    render: function() {
        return (
            <div className="navigation col-xs-12">
                <div className="col-xs-9">
                    <span className="navigation-header">Brad Bolander</span>
                </div>
                <div className="col-xs-3">
                    <span className="navigation-item">About</span>
                    <span className="navigation-item">Experience</span>
                    <OpenProjects toggleProjects={this.props.toggleProjects} />
                    <span className="navigation-item">Contact</span>
                </div>
            </div>
        );
      }
  });

  var GridNavigation = React.createClass({
      
    render: function() {
        var showGridNav = this.props.showGridNav == true ? "magictime slideRightReturn db" : "magictime slideRight dn";
        
        return (
            <div className="grid-nav col-xs-12">
                <div className={showGridNav}>
                    <div className="grid-nav-wrap">
                        <span className="grid-nav-item col-xs-6">About</span>
                        <span onClick={() => {this.props.toggleExperience()}} className="grid-nav-item col-xs-6">Experience</span>
                        <span onClick={() => {this.props.toggleProjects()}} className="grid-nav-item col-xs-6">Projects</span>
                        <span className="grid-nav-item col-xs-6">Contact</span>
                    </div>
                </div>
            </div>
        );
      }
  });

  var Hero = React.createClass({
    render: function() {
        return (
            <div id="h">
              
            </div>
        );
      }
  });

  var ProjectGrid = React.createClass({

    handleClick: function(index) {
        $('#hero-container').children().remove();
        this.props.toggleProjects();
        if (index == 1) {
            initProj1();
        } else if (index == 2) {
            initProj2();
        } else if (index == 3) {
            initProj3();
        } else {
            initProj4();
        };
    },


    render: function() {
        var showProjects = this.props.showProjects == true ? "magictime slideRightReturn db" : "magictime slideRight dn";

        return (
            <div className="project-container col-xs-12">
                <div className={showProjects}>
                    <h1 className="projects-header">Side Projects</h1>
                    <div onClick={() => {this.handleClick(1)}} className="project-item col-lg-6">
                        <span className="project-item-title">Shader Triangles</span>
                        <img className="project-item-image" src="/images/geometry.png" />
                    </div>
                    <div onClick={() => {this.handleClick(2)}} className="project-item col-xs-6">
                        <span className="project-item-title">Planet</span>
                        <img className="project-item-image" src="/images/planet.png" />
                    </div>
                    <div onClick={() => {this.handleClick(3)}} className="project-item col-xs-6">
                        <span className="project-item-title">Sphere geometry</span>
                        <img className="project-item-image" src="/images/geo-gen.png" />
                    </div>
                    <div onClick={() => {this.handleClick(4)}} className="project-item col-xs-6">
                        <span className="project-item-title">Garden</span>
                        <img className="project-item-image" src="/images/garden.jpg" />
                    </div> 
                </div>
            </div>
        );
      }
  });

  var Experience = React.createClass({
    
    render: function() {
        var showExperience = this.props.showExperience == true ? "magictime slideRightReturn db" : "magictime slideRight dn";
        
        return (
            <div className={showExperience}>
                <div className="experience-container col-xs-12">
                    <h1 className="experience-header">Work Experience</h1>
                        <div className="experience-item">
                            <div className="experience-item-head">
                                <img className="experience-item-image" src="https://cdn.thetiebar.com/layout/logo_header.svg" alt="The Tie Bar Logo" />
                                <span className="experience-item-title">The Tie Bar</span>
                                <p className="experience-description">Front End Web Developer</p>
                            </div>
                            <div className="experience-item-body">
                                description here
                            </div>
                        </div>
                        <div className="experience-item">
                            <div className="experience-item-head">
                                <img className="experience-item-image" src="https://cdn.shopify.com/s/files/1/1932/6945/t/1/assets/logo.svg?8576992817837470070" />
                                <span className="experience-item-title">Bucketfeet</span>
                                <p className="experience-description">Front End Web Developer</p>
                            </div>
                            <div className="experience-item-body">
                                description here
                            </div>
                        </div>
                </div>
            </div>
        );
      }
  });

  var Contact = React.createClass({
    
    render: function() {
        var showContact = this.props.showExperience == true ? "magictime slideRightReturn db" : "magictime slideRight dn";
        
        return (
            <div className={showExperience}>
                <div className="contact-container col-xs-12">
                   
                </div>
            </div>
        );
      }
  });

  var About = React.createClass({
    
    render: function() {
        var showAbout = this.props.showAbout == true ? "magictime slideRightReturn db" : "magictime slideRight dn";
        
        return (
            <div className={showExperience}>
                <div className="about-container col-xs-12">
                   
                </div>
            </div>
        );
      }
  });


  var OpenProjects = React.createClass({
    handleClick: function() {
        this.props.toggleProjects();
    },

    render: function() {
        return (
            <span onClick={() => {this.handleClick()}} className="navigation-item open-projects">Projects</span>
        );
      }
  });

  var If = React.createClass({
    render: function() {
        if (this.props.test) return this.props.children;
        else return false;
    }
  });




  ReactDOM.render(
    <App/>,
    document.getElementById('container')
  );