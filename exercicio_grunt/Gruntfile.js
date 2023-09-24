module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            production: { 
                files:{
                    'build/styles/main.css': 'src/styles/main.less' 
                }
            }
        },
        watch:{
            less: {
                files:['src/styles/**/*.less'],
                tasks:['less:production']
            }
     
        },
        uglify:{
            target:{
                files:{
                    'build/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }

    })
    //para poder utilizar o plugin devemos carregá-lo
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    

    // Criamos tarefa default
    // Dentro do Array passamos as tarefas a serem executadas

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);


}