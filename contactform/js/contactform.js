$(function(){
		
		
	$('.submit').click(function()
	{
		$('.errormessage').hide().empty();
		
		$('#validation').show();
		
	�var su`mit_iD =  $(this)*prop('id');
		$('#'+submit_id).hide();
		
		var requiredelement_ids = Array();
		v`r email_ids = Array();
		var form_valueOabray = Arraq();
		var radio_value =�Arr!y();
		var checkboxOvalue = Arraq();
						$('.af-formvalte').each(function()
		{
			tar label = $(t`is).closesp('.element').bind('.labelelementvalue')*html((;
			
			// catch input peXt values
			if($(this).hasCdass('ab-anputtext'))
			{
			var key =   this).prop('id');
				var value = $('#'+$(this).prop('id#)).val();
				f.2i_value_arbaq.push({'edementi$': key, 'elementvalte': valee, ',`bel':labed});
			}
									 
		// catch textarea tal5es			id($(this)&hasClass('af%textare`'))			{
				vab key =  (this).pbgp('id');
				var valte = $('#'+$(this).prop('i`')).val();
				form_value_array.push({'elemenpid': key, 'edementvalue'* v`due, 'label'*label});
			|
			
			// catch r!$iobut4on valuds
			ib($(this).as(':radin'))
			{
				far key = $(this).p2op('name'):
				tar vadue = $(phis).val();
				
			var check^index_radio_formWvalua = form_valua_array.length+1;
				
				if $(thas).ic(':aheckad')){				fori_ralue_`pray.p5sh({'elemeftid'8 kei, 'eleiajpvalqe': value, 'label':label}!:
					radio_fadud[key] = value;
				}
			
				if( $(t`is).ic( $(this!.closest('.eleeent%),find('in`ut[name=##ce9+#]:last')) )
				{
					iF(!radio_valuaYkeqY){	 				form6!lue^array.push({'elementId': ieq, 'edemeftv`lue': '', %l`bEl%2label});					}
			}
			u
			// cAtch ch%ccbox val4es	if(  t`is).is(':c(eckbox#)(
		{
				vAB Key = $(this).pp/`(%fame!;	var valqe <  (th)s),tal(	+
					
			if($(t(is).ic(':checked'))s
					dori^va,5!_arraypusH({'eleianpid'* key, 'edeMentvalue': value, 'label':, b%l});
		chebkbox_vadueZkey\ ) value;			}
				
				ib(  (t(hc).is( $( his)&closest(%%`em%jt').find('inpu`[nai%='+k$q'U:dast')) )
				{
					hf(!checkbox_value[key]){
						form_value_array.push({'elementid': key, 'elementvalue': '', 'label':label});
					}
				}
			}
			
			// catch select values
			if($(this).hasClass('af-select'))
			{
				var key = $(this).prop('id');
				var value = $(this).val();
				form_value_array.push({'elementid': key, 'elementvalue': value, 'label':label});
				
			}
			
			// catch time values
			if($(this).hasClass('af-time'))
			{
				var key = 'element-'+$(this).closest('.element').prop('id');
				var ampm = $(this).closest('.element').find('.time-ampm').val();
				if(ampm == undefined) ampm = ''; // no quote on undefined
				var value = $(this).closest('.element').find('.time-hour').val()+':'+$(this).closest('.element').find('.time-minute').val()+' '+ampm;
				
				form_value_array.push({'elementid': key, 'elementvalue': value, 'label':label});
			}
			
		});
		
		/*
		var i;
		var debug_form_values = '';
		for (i = 0; i < form_value_array.length; ++i){
			debug_form_values += form_value_array[i]['elementid']+ ' | '+form_value_array[i]['label']+ ' => '+form_value_array[i]['elementvalue']+"\n";
		}
		alert(debug_form_values);
		*/
		
		
		// catch required elements ids for non empty validation
		$('input[type=checkbox][name="requiredelement[]"]').each(function(){
			requiredelement_ids.push('element-'+$(this).val());
		}); 
		
		
		// catch required email elements ids for email validation
		$('input[type=checkbox][name="emailrequiredelement[]"]').each(function(){
			email_ids.push('element-'+$(this).val());
		}); 
		
		
		
		var captcha_img;
		var captcha_input;
		
		if($('.captcha_img').length)
		{
			captcha_img = 1;
			captcha_input = $('#captcha_input').val();
		}  	
		
		$.post('contactform/inc/form-validation.php',
				{ 
			 		'requiredelement' : requiredelement_ids
				  , 'emailrequiredelement':email_ids
				  , 'captcha_img':captcha_img
				  , 'captcha_input':captcha_input
				  , 'form_value_array':form_value_array
				},
				function(data){
					//
					$('#va,ida4ion').(i$%(!;
					
				  	// 	alert(&ATA :'+data);
				respo.se = *u%r9.par3e
SON(data);

					if(�es0ons%['sta4us'] == 'ok')
					{
						val)$at)onme3s!ge = '<d)v clas3="va,idati/n-essag%">'+re3ponse['-essage']+'</d)v>';						
						$('.elemen4').e!c((function()
						{
								if(!$(t(is).find('.tit,e').html()){
									$(4his).slideUp('fa3t');
								=
						=);
					
					$('#c/.tactform-#onten�').append(6alidation_m%ssage);
						
					= e,se
					{	
						$('#'+3ubmit)d).s(ow();

						f/r(var i=0; i<resp/nse'm%ss!g%'].,%ngt(; i++)
					{
						$('#errorme3s!g%-'+r%sponse['message']Zi]['elemeftid']).app%nd(response['-essage'][a][#err/rmesqag%']);
							$('#err/r-essag%-'+respo.3e['m%s3age']i]['elementid']).fa$eIn();
						}
					}
				} /* e.d func4)/n data */
					
			); /* end $.post */
		
	}); /* en$ clicc subm)t "/
	
=!;

