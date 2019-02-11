const fs = require('fs');
const props = {};
const componentsPath = './src/components';

const tmplClass = `import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './{{name}}.scss';

const propTypes = {
};

const defaultProps = {
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class {{name}} extends Component {
    componentDidMount() {}
    /* here is the place for custom methods */
    render() {
        return (
            <div className="{{name}}">
            {/* here is going to be body of the component */}
            </div>
        );
    }
}

{{name}}.propTypes = propTypes;
{{name}}.defaultProps = defaultProps;

export default {{name}};`;

const tmplRedux = `import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './{{name}}.scss';

const propTypes = {
};

const defaultProps = {
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class {{name}} extends Component {
    componentDidMount() {}
    /* here is the place for custom methods */


    render() {
        return (
            <div className="{{name}}">
            {/* here is going to be body of the component */}
            </div>
        );
    }
}

{{name}}.propTypes = propTypes;
{{name}}.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
    
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)({{name}});
`;


const tmplFunc = `import React from 'react';
import PropTypes from 'prop-types';

import './{{name}}.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
function {{name}}(props) {
    return (
            <div className="{{name}}">
            {/* here is going to be body of the component*/}
            </div>
    );
}

{{name}}.propTypes = {
};

{{name}}.defaultProps = {
};

export default {{name}};`;


const tmplScss = `@import '../../vars';

.{{name}}{
}`;

const tmplSpec = `import React from 'react';
import {{name}} from './{{name}}.js';

describe('Test for {{name}} component', ()=>{
    const props = {};
    
    it('{{name}} from render', ()=>{
        const wrapper = shallow(<{{name}} {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});`;

const writeFile = (path, name, template) => {
  fs.writeFile(path, template.replace(/{{name}}/gi, name), (err) => {
    if (err) {
      console.log(err);
    }
  });
};


const generateFiles = (name, type, dir) => {

  if (!fs.existsSync(`${dir}/${name}.js`)) {
    switch (type) {
      case 'func':
        writeFile(`${dir}/${name}.js`, name, tmplFunc);
        break;
      case 'redux':
        writeFile(`${dir}/${name}.js`, name, tmplRedux);
        break;
      default:
        writeFile(`${dir}/${name}.js`, name, tmplClass);
    }
    writeFile(`${dir}/${name}.scss`, name, tmplScss);
    writeFile(`${dir}/${name}.spec.js`, name, tmplSpec);
  } else {
    console.log(`The component ${name} already exists`);
  }
};

// extract args form command line
process.argv.forEach((value) => {
  const matches = value.match(/--([^=]+)=([^\s]+)/);
  if (matches !== null) {
    const [, a, b] = matches;
    props[a] = b;
  }
});

if (props.name) {
  const parts = props.name.split('/');
  let dir = componentsPath;
  if (parts.length) {
    parts.forEach((value) => {
      dir += `/${value}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    });
  }
  generateFiles(parts[parts.length - 1], props.type, dir);
}
