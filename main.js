
var commandText = function (text) {
    return '[[g;#EEEEEE;]' + text + ']'
};

var header = `

[[g;#EEEEEE;][[g;#EEEEEE;]    |]]                                               $$\\
[[g;#EEEEEE;]    |]                                               $$ |
[[g;#EEEEEE;]    |]                 $$\\  $$$$$$\\   $$$$$$\\   $$$$$$$ | $$$$$$\\  $$$$$$$\\   
[[g;#EEEEEE;]    |]                 \\__|$$  __$$\\ $$  __$$\\ $$  __$$ | \\____$$\\ $$  __$$\\ 
[[g;#EEEEEE;]    |]                 $$\\ $$ /  $$ |$$ |  \\__|$$ /  $$ | $$$$$$$ |$$ |  $$ |    
[[g;#EEEEEE;]    |]                 $$ |$$ |  $$ |$$ |      $$ |  $$ |$$  __$$ |$$ |  $$ |      
[[g;#EEEEEE;]    |]                 $$ |\\$$$$$$  |$$ |      \\$$$$$$$ |\\$$$$$$$ |$$ |  $$ |   
[[g;#EEEEEE;]    |]                 $$ | \\______/ \\__|       \\_______| \\_______|\\__|  \\__|
[[g;#EEEEEE;]    |]           $$\\   $$ |
[[g;#EEEEEE;]    |]           \\$$$$$$  |
[[g;#EEEEEE;]    |]            \\______/ 
[[g;#EEEEEE;]    |]                      
[[g;#EEEEEE;]    |]    [[g;#EEEEEE;]Software Developer]
[[g;#EEEEEE;]    |]                                                                                                                    
`
var menu_banner = `
[[g;#EEEEEE;]    |]
[[g;#EEEEEE;]    |]    Please type ${commandText(`menu`)} for a list of commands.
[[g;#EEEEEE;]    |]
`

var motd = `
[[g;#EEEEEE;]    |]
[[g;#EEEEEE;]    |]    "A byte of time is a byte of gold, but you can't buy that byte of time, with a byte of gold.”
[[g;#EEEEEE;]    |]
`

var system_info = `
[[g;#EEEEEE;]    |]           
[[g;#EEEEEE;]    |]                -/oyddmdhs+:.                      user1@computer1
[[g;#EEEEEE;]    |]            -odNMMMMMMMMNNmhy+-'                   ---------------
[[g;#EEEEEE;]    |]          -yNMMMMMMMMMMMNNNmmdhy+-                 OS: Gentoo Linux x86_64
[[g;#EEEEEE;]    |]        'omMMMMMMMMMMMMNmdmmmmddhhy/'              Kernel: Linux 6.12.25-gentoo-dist
[[g;#EEEEEE;]    |]        omMMMMMMMMMMMNhhyyyohmdddhhhdo'            Packages: 950 (emerge), 7 (flatpak)
[[g;#EEEEEE;]    |]       .ydMMMMMMMMMMdhs++so/smdddhhhhdm+'          Shell: zsh 5.9
[[g;#EEEEEE;]    |]        oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.         DE: Xfce4 4.20
[[g;#EEEEEE;]    |]         :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh         WM: Xfwm4 (X11)
[[g;#EEEEEE;]    |]           .:+sydNMMMMMNNNmmmdddhhhhhhmMmy         Theme: Adwaita [GTK3]
[[g;#EEEEEE;]    |]              /mMMMMMMNNNmmmdddhhhhhmMNhs:         Icons: win10x
[[g;#EEEEEE;]    |]           'oNMMMMMMMNNNmmmddddhhdmMNhs+'          Cursor: Adwaita
[[g;#EEEEEE;]    |]         'sNMMMMMMMMNNNmmmdddddmNMmhs/.            Terminal: xfce4-terminal 1.1.5
[[g;#EEEEEE;]    |]        /NMMMMMMMMNNNNmmmdddmNMNdso:'              Terminal Font: NerdFont NF 
[[g;#EEEEEE;]    |]       +MMMMMMMNNNNNmmmmdmNMNdso/-            
[[g;#EEEEEE;]    |]       yMMNNNNNNNmmmmmNNMmhs+/-'              
[[g;#EEEEEE;]    |]       /hMMNNNNNNNNMNdhs++/-'                 
[[g;#EEEEEE;]    |]       '/ohdmmddhys+++/:.'                    
[[g;#EEEEEE;]    |]         '-//////:--.                         
[[g;#EEEEEE;]    |]           
`

var Commands = {
    menu: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('motd') + '               - Display Message of the Day');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('about') + '              - Summary of me');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('fastfetch') + '          - Get my dev environment value');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('projects') + '           - Recent projects of mine');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('skills') + '             - What I can do');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('github') + '             - Das github');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('linkedin') + '           - How I connect for work things');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('contact') + '            - Contact me');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('credits') + '            - Credits for this website');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('clear') + '              - Clear screen');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('all') + '                - Run all commands');
        this.echo();
    },
    motd: function () {
        this.echo(motd);
    },
    about: function () { // maybe combine with fastfetch
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  Name:         ' + commandText('Jordan'));
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  Location:     ' + commandText('United States, Remote'));
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  Vocation:     ' + commandText('Software Developer'));
        this.echo('\t[[g;#EEEEEE;]| ]                Experienced in multiple languages, tools, and environments');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  Employment:   I am currently seeking a ' + commandText('Remote') + ' position.');
        this.echo('\t[[g;#EEEEEE;]| ]                Get in touch if you\'d like more information sudo.sendmail.jordan@gmail.com');
        this.echo();
    },
    fastfetch: function () {
        this.echo(system_info);
        this.echo();
    },
    projects: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Code Racer') + '\t\t\t\t\t\t\t' + 'https://github.com/cody/code-racer');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Linux Themes') + '\t\t\t\t\t\t  ' + 'https://github.com/linuxthemes');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Runelite Plugin') + '\t\t\t\t\t   ' + 'https://github.com/runelite');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Bottles: Eve Online Launcher') + '\t\t  ' + 'https://github.com/ohmybash/oh-my-bash');
        this.echo();
    },
    skills: function () {
        this.echo();
        this.echo('\t>  ' + 'Languages');
        this.echo();
        this.echo('\t\t\t  ' + commandText('\ue61d') + '\t\t\t\t' + 'Javascript');
        this.echo('\t\t\t  ' + commandText('\ue738') + '\t\t\t\t' + 'Java');
        this.echo('\t\t\t  ' + commandText('\ue73c') + '\t\t\t\t' + 'Python');
        this.echo('\t\t\t  ' + commandText('\udb81\udfd3') + '\t\t\t\t' + 'Go');
        this.echo('\t\t\t  ' + commandText('\udb81\ude72') + '\t\t\t\t' + 'C++');
        this.echo('\t\t\t  ' + commandText('\ue61e') + '\t\t\t\t' + 'C');
        this.echo('\t\t\t  ' + commandText('\ue760') + '\t\t\t\t' + 'Bash');
        this.echo();
        this.echo('\t>  ' + 'Frameworks');
        this.echo();
        this.echo('\t\t\t  ' + commandText('\ue7ba') + '\t\t\t\t' + 'React');
        this.echo('\t\t\t  ' + commandText('\ue8ac') + '\t\t\t\t' + 'Spring');
        this.echo('\t\t\t  ' + commandText('\udb81\udebf') + '\t\t\t\t' + 'Angular');
        this.echo();
        this.echo('\t>  ' + 'Platforms');
        this.echo();
        this.echo('\t\t\t  ' + commandText('\ue7e6') + '\t\t\t\t' + 'Linux');
        this.echo('\t\t\t  ' + commandText('\ue70f') + '\t\t\t\t' + 'Windows');
        this.echo('\t\t\t  ' + commandText('\uebaa') + '\t\t\t\t' + 'Cloud');
        this.echo('\t\t\t  ' + commandText('\uf21f') + '\t\t\t\t' + 'Docker');
        this.echo();
        this.echo('\t>  ' + 'Tools');
        this.echo();
        this.echo('\t\t\t  ' + commandText('\ue8da') + '\t\t\t\t' + 'VSCode');
        this.echo('\t\t\t  ' + commandText('\ue745') + '\t\t\t\t' + 'Librewolf');
        this.echo('\t\t\t  ' + commandText('\uf092') + '\t\t\t\t' + 'GitHub Desktop');
        this.echo();
    },
    certifications: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Java Developer') + '\t\t\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Java Backend Developer') + '\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Java Desktop Developer') + '\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Java Spring Security ') + '\t\t ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Python Developer') + '\t\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Go Developer') + '\t\t\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Front End Developer') + '\t\t   ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Javascript Developer') + '\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + commandText('Linux Certified') + '\t\t\t   ' + 'https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    github: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    linkedin: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  ' + 'Phone' + ':         [[g;#EEEEEE;]420.420.6969]');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + 'Email' + ':         sudo.sendmail.jordan@gmail.com');
        this.echo('\t[[g;#EEEEEE;]| ]  ' + 'LinkedIn' + ':      https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    credits: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  Forked and refactored from: https://github.com/nntoan/nntoan.github.io');
        this.echo('\t[[g;#EEEEEE;]| ]  Using ' + commandText('Jquery Terminal Emulator') + ' by ' + commandText('Jakub Jankiewicz') + ': http://terminal.jcubic.pl');
        this.echo();
    },
    all: function () {
        this.clear();
        this.echo(header);
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('certifications');
        this.exec('fastfetch');
        this.exec('contact');
        this.exec('github');
        this.exec('linkedin');
        this.exec('credits');
    }
};

$(function () {
    var terminal = $('#terminal').terminal(function (command, term) {
        // Parse command and execute
        var cmd = command.trim().toLowerCase();
        if (Commands.hasOwnProperty(cmd)) {
            Commands[cmd].call(term);
        } else {
            term.echo("\tUnknown command: " + command); // make red
        }
    }, {
        prompt: 'js> ',

        // Callback after each command
        onAfterCommand: function (command, term) {
            if (command === 'help') {
                term.exec('menu')
            }
        }
    });
    terminal.exec('all')
    
    // Make the container resizable using jQuery UI
    $('#terminal-container').resizable({
        resize: function () {
            // When resized, call resize() on the terminal
            var container = $(this);
            var width = container.width();
            var height = container.height();

            // Resize the terminal to fit the container
            $('#terminal').terminal().resize(width, height);
        }
    });
});
