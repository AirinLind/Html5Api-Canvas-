const canvas = document.querySelector('canvas')
const $ = canvas.getContext('2d')
const ctx = canvas.getContext('2d')


$.beginPath()
$.moveTo(50, 90)
$.lineTo(240, 90)
$.closePath()
$.lineWidth = 2
$.strokeStyle = 'black'
$.stroke()

$.beginPath()
$.moveTo(50, 170)
$.lineTo(240, 170)
$.closePath()
$.lineWidth = 2
$.strokeStyle = 'black'
$.stroke()

$.beginPath()
$.moveTo(100, 40)
$.lineTo( 100, 240)
$.closePath()
$.lineWidth = 2
$.strokeStyle = 'black'
$.stroke()

$.beginPath()
$.moveTo(180, 40)
$.lineTo(180, 240)
$.closePath()
$.lineWidth = 2
$.strokeStyle = 'black'
$.stroke()



$.beginPath()
$.moveTo(40, 40)
$.lineTo(90, 80)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()

$.beginPath()
$.moveTo(90, 40)
$.lineTo(40, 80)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()


$.beginPath()
$.moveTo(115, 190)
$.lineTo(165, 230)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()

$.beginPath()
$.moveTo(165, 190)
$.lineTo(115, 230)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()


$.beginPath()
$.moveTo(115, 110)
$.lineTo(165, 150)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()

$.beginPath()
$.moveTo(165, 110)
$.lineTo(115, 150)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()


$.beginPath()
$.moveTo(190, 190)
$.lineTo(240, 230)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()

$.beginPath()
$.moveTo(240, 190)
$.lineTo(190, 230)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()


$.beginPath()
$.moveTo(190, 40)
$.lineTo(240, 80)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()

$.beginPath()
$.moveTo(240, 40)
$.lineTo(190, 80)
$.closePath()
$.lineWidth = 1
$.strokeStyle = 'darkgreen'
$.stroke()


$.strokeStyle = 'rgb(255,0,0)'
$.beginPath()
$.arc(65,130, 25, 0, Math.PI * 2)
$.stroke()

$.strokeStyle = 'rgb(255,0,0)'
$.beginPath()
$.arc(65,210, 25, 0, Math.PI * 2)
$.stroke()

$.strokeStyle = 'rgb(255,0,0)'
$.beginPath()
$.arc(215,130, 25, 0, Math.PI * 2)
$.stroke()

$.strokeStyle = 'rgb(255,0,0)'
$.beginPath()
$.arc(140,60, 25, 0, Math.PI * 2)
$.stroke()
