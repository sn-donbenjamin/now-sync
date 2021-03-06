// Catalog Client Scripts
exports.catalog_script_client = {
  nameField: ['sys_scope', 'name'],
  formats: [
    {
      fileName: ':sys_scope-:name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// CMS CSS
exports.content_css = {
  nameField: ['sys_scope', 'name'],
  formats: [
    {
      fileName: ':sys_scope-:name-style-:sys_id.css',
      contentField: 'style'
    }
  ]
};

// Service Portal CSS
exports.sp_css = {
  nameField: ['sys_scope', 'name'],
  formats: [
    {
      fileName: ':sys_scope-:name-css-:sys_id.css',
      contentField: 'css'
    }
  ]
};

// Service Portal Header/Footer
exports.sp_header_footer = {
  nameField: ['sys_scope', 'id'],
  formats: [
    {
      fileName: ':sys_scope-:id-template-:sys_id.html',
      contentField: 'template'
    },
    {
      fileName: ':sys_scope-:id-css-:sys_id.scss',
      contentField: 'css'
    },
    {
      fileName: ':sys_scope-:id-script-:sys_id.js',
      contentField: 'script'
    },
    {
      fileName: ':sys_scope-:id-client_script-:sys_id.js',
      contentField: 'client_script'
    },
    {
      fileName: ':sys_scope-:id-link-:sys_id.js',
      contentField: 'link'
    }
  ]
};

// Service Portal Page
exports.sp_page = {
  nameField: ['id'],
  formats: [
    {
      fileName: ':id-css-:sys_id.css',
      contentField: 'css'
    }
  ]
};

// Service Portal
exports.sp_portal = {
  nameField: 'url_suffix',
  formats: [
    {
      fileName: ':url_suffix-quick_start_config-:sys_id.json',
      contentField: 'quick_start_config'
    },
    {
      fileName: ':url_suffix-css_variables-:sys_id.scss',
      contentField: 'css_variables'
    }
  ]
};

// Service Portal Theme CSS
exports.sp_theme = {
  nameField: 'name',
  formats: [
    {
      fileName: ':name-css_variables-:sys_id.scss',
      contentField: 'css_variables'
    }
  ]
};

// Service Portal Widgets
exports.sp_widget = {
  nameField: 'name',
  formats: [
    {
      fileName: ':name-client_script-:sys_id.js',
      contentField: 'client_script'
    },
    {
      fileName: ':name-css-:sys_id.css',
      contentField: 'css'
    },
    {
      fileName: ':name-demo_data-:sys_id.json',
      contentField: 'demo_data'
    },
    {
      fileName: ':name-link-:sys_id.js',
      contentField: 'link'
    },
    {
      fileName: ':name-option_schema-:sys_id.json',
      contentField: 'option_schema'
    },
    {
      fileName: ':name-script-:sys_id.js',
      contentField: 'script'
    },
    {
      fileName: ':name-template-:sys_id.html',
      contentField: 'template'
    }
  ]
};

// Business Rules
exports.sys_script = {
  nameField: ['collection', 'name'],
  formats: [
    {
      fileName: ':collection-:name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// Client Scripts
exports.sys_script_client = {
  nameField: ['table', 'sys_scope', 'name'],
  formats: [
    {
      fileName: ':table-:sys_scope-:name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// Script Includes
exports.sys_script_include = {
  nameField: 'api_name',
  formats: [
    {
      fileName: ':api_name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// UI Scripts
exports.sys_ui_action = {
  nameField: 'action_name',
  formats: [
    {
      fileName: ':sys_scope-:table-:action_name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// UI Pages
exports.sys_ui_page = {
  nameField: ['sys_scope', 'name'],
  formats: [
    {
      fileName: ':sys_scope-:name-html-:sys_id.html',
      contentField: 'html'
    },
    {
      fileName: ':sys_scope-:name-client_script-:sys_id.js',
      contentField: 'client_script'
    }
  ]
};

// UI Scripts
exports.sys_ui_script = {
  nameField: 'name',
  formats: [
    {
      fileName: ':name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};

// Script REST Resources
exports.sys_ws_operation = {
  nameField: ['web_service_definition', 'name', 'http_method'],
  formats: [
    {
      fileName:
        ':web_service_definition-:name-:http_method-operation_script-:sys_id.js',
      contentField: 'operation_script'
    }
  ]
};

// Scheduled Jobs
exports.sysauto_script = {
  nameField: ['sys_scope', 'name'],
  formats: [
    {
      fileName: ':sys_scope-:name-script-:sys_id.js',
      contentField: 'script'
    }
  ]
};
