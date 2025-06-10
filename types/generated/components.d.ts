import type { Schema, Struct } from '@strapi/strapi';

export interface BlogTag extends Struct.ComponentSchema {
  collectionName: 'components_blog_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.tag': BlogTag;
    }
  }
}
