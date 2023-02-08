import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price of dish in GBP',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
  ],
  // defineField({
  //     name: 'slug',
  //     title: 'Slug',
  //     type: 'slug',
  //     options: {
  //       source: 'name',
  //       maxLength: 96,
  //     },
  //   defineField({
  //     name: 'slug',
  //     title: 'Slug',
  //     type: 'slug',
  //     options: {
  //       source: 'name',
  //       maxLength: 96,
  //     },
  //   }),
  //   defineField({
  //     name: 'image',
  //     title: 'Image',
  //     type: 'image',
  //     options: {
  //       hotspot: true,
  //     },
  //   }),
  //   defineField({
  //     name: 'bio',
  //     title: 'Bio',
  //     type: 'array',
  //     of: [
  //       {
  //         title: 'Block',
  //         type: 'block',
  //         styles: [{title: 'Normal', value: 'normal'}],
  //         lists: [],
  //       },
  //     ],
  //   }),
  // ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
})
