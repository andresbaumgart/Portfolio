<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form  action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    Name<br>
    <input name="name" type="text" value="" size="30"/><br>
    Email<br>
    <input name="email" type="text" value="" size="30"/><br>
    Message<br>
    <textarea name="message" rows="7" cols="40"></textarea><br>
    <input type="submit" value="Send"/>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
		echo "All fields are required, please fill <a href=\"\">the form</a> again.";
	    }
    else{		
	    $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message via www.andrebaumgart.com";
		mail("mail@andrebaumgart.com", $subject, $message, $from);
		echo "Sent!";
	    }
    }  
?>
